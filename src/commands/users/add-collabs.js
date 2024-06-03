'use strict';

// import {Args, Command, Flags} from '@oclif/core'
const BoxCommand = require('../../box-command');
const { flags } = require('@oclif/command');
const BoxCLIError = require('../../cli-error');

class UsersAddCollabs extends BoxCommand {
	// static override args = {
	//   file: Args.string({description: 'file to read'}),
	// }

	// static override description = 'describe the command here'

	// static override examples = [
	//   '<%= config.bin %> <%= command.id %>',
	// ]

	// static override flags = {
	//   // flag with no value (-f, --force)
	//   force: Flags.boolean({char: 'f'}),
	//   // flag with a value (-n, --name=VALUE)
	//   name: Flags.string({char: 'n', description: 'name to print'}),
	// }

	async run() {
		const { args, flags } = await this.parse(UsersAddCollabs);

		// const name = flags.name ?? 'world';
		// this.log(
		// 	`hello ${name} from /app/ag/boxcli-ext/src/commands/users/add-collabs.ts`
		// );
		// if (args.file && flags.force) {
		// 	this.log(`you input --force and --file: ${args.file}`);
		// }

		// check former users content
		const user_info = await this.client.users.get(args.id, {
			fields: 'space_used',
		});
		const space_used = user_info.space_used;
		if (space_used > 0) {
			this.warn(`User ${args.id} has content in their root folder`);
		} else {
			this.output(`User ${args.id} has no content in their root folder`);
		}

		// add collab
		const items = await this.client.folders.getItems(0, {
			fields: 'id,type,name',
		});
		const target_folder = items.buffer.find((item) =>
			item.name.includes(args.emailaddress)
		);
		if (!target_folder) {
			this.error(
				`User ${args.id} does not have a folder with ${args.emailaddress}`
			);
		}
		const collab = await this.client.collaborations.createWithUserID(
			args.id,
			target_folder.id,
			this.client.collaborationRoles.EDITOR
		);
		if (!!collab) {
			this.output(collab);
		}
	}
}

UsersAddCollabs.description =
	'Invite former owners to their respective folders';
UsersAddCollabs.examples = ['box users:add-collabs 22222 jdoe@example.com'];
UsersAddCollabs.flags = {
	...BoxCommand.flags,
};

UsersAddCollabs.args = [
	{
		name: 'id',
		required: true,
		description: 'User ID',
	},
	{
		name: 'emailaddress',
		required: true,
		description: 'Email address of collaborator',
	},
];

module.exports = UsersAddCollabs;
