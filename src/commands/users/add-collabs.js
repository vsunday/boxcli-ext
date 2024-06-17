'use strict';

// import {Args, Command, Flags} from '@oclif/core'
const BoxCommand = require('../../box-command');
// const { flags } = require('@oclif/command');
// const BoxCLIError = require('../../cli-error');

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

		this.client.asUser(args.NEWOWNERID)

		// const name = flags.name ?? 'world';
		// this.log(
		// 	`hello ${name} from /app/ag/boxcli-ext/src/commands/users/add-collabs.ts`
		// );
		// if (args.file && flags.force) {
		// 	this.log(`you input --force and --file: ${args.file}`);
		// }

		// check former users content
		const user_info = await this.client.users.get(args.ID, {
			fields: 'space_used',
		});
		const space_used = user_info.space_used;
		if (space_used > 0) {
			this.warn(`User ${args.ID} has content in their root folder`);
		} else {
			this.output(`User ${args.ID} has no content in their root folder`);
		}

		// add collab
		const items = await this.client.folders.getItems(0, {
			fields: 'id,type,name',
		});
		const target_folder = items.buffer.find((item) =>
			item.name.includes(args.EMAILADDRESS)
		);
		if (!target_folder) {
			this.error(
				`User ${args.id} does not have a folder with ${args.EMAILADDRESS}`
			);
		}
		const collab = await this.client.collaborations.createWithUserID(
			args.ID,
			target_folder.id,
			this.client.collaborationRoles.CO_OWNER
		);
		if (!!collab) {
			this.output(collab);
		}
	}
}

UsersAddCollabs.description =
	'Invite former owners to their respective folders';
UsersAddCollabs.examples = ['box users:add-collabs 22222 jdoe@example.com 99999'];
UsersAddCollabs.flags = {
	...BoxCommand.flags,
};

UsersAddCollabs.args = [
	{
		name: 'ID',
		required: true,
		description: 'User ID',
	},
	{
		name: 'EMAILADDRESS',
		required: true,
		description: 'Email address of collaborator',
	},
	{
		name: 'NEWOWNERID',
		required: true,
		description: 'User ID of new owner account',
	},
];

module.exports = UsersAddCollabs;
