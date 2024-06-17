'use strict';

const BoxCommand = require('../../box-command');
const { flags } = require('@oclif/command');

class UsersTakeOwnershipCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(UsersTakeOwnershipCommand);
		// const current_user_id = (
		// 	await this.client.users.get(this.client.CURRENT_USER_ID)
		// ).id;
		let params = {
			body: {
				owned_by: {
					id: args.NEWOWNERID,
				},
			},
			qs: {},
		};

		if (flags.hasOwnProperty('notify')) {
			params.qs.notify = false; //flags.notify;
		}

		// @TODO (2018-07-07): Should implement this using the Node SDK. Existing this.client.enterprise.transferUserContent() does not allow the notify option to be passed
		this.client.wrapWithDefaultHandler(this.client.put)(
			// let movedFolder = await this.client.wrapWithDefaultHandler(this.client.put)(
			`/users/${args.ID}/folders/0`,
			params
		);
		// await this.output(movedFolder);
		this.output(`content transfer for user_id ${args.ID} started`);
	}
}

UsersTakeOwnershipCommand.description =
	"Move a ID user's root content to NEWOWNERID user";
UsersTakeOwnershipCommand.examples = ['box users:take-ownership 33333 99999'];
// UsersChangeOwnerCommand._endpoint = 'put_users_id_folders_id';

UsersTakeOwnershipCommand.flags = {
	...BoxCommand.flags,
	// notify: flags.boolean({
	// 	description: 'Notify the user that their content has been moved',
	// 	allowNo: true
	// })
};

UsersTakeOwnershipCommand.args = [
	{
		name: 'ID',
		required: true,
		hidden: false,
		description: 'User whose content should be moved',
	},
	{
		name: 'NEWOWNERID',
		required: true,
		hidden: false,
		description: 'User who will own other users\' contents',
	},
];

module.exports = UsersTakeOwnershipCommand;