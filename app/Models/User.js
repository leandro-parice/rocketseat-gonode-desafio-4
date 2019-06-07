'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }

  projects () {
    return this.hasMany('App/Models/Project')
  }

  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }
}

module.exports = User
