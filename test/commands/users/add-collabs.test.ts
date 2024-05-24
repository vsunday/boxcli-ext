import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('users:add-collabs', () => {
  it('runs users:add-collabs cmd', async () => {
    const {stdout} = await runCommand('users:add-collabs')
    expect(stdout).to.contain('hello world')
  })

  it('runs users:add-collabs --name oclif', async () => {
    const {stdout} = await runCommand('users:add-collabs --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
