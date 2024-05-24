import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('users:change-owner', () => {
  it('runs users:change-owner cmd', async () => {
    const {stdout} = await runCommand('users:change-owner')
    expect(stdout).to.contain('hello world')
  })

  it('runs users:change-owner --name oclif', async () => {
    const {stdout} = await runCommand('users:change-owner --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
