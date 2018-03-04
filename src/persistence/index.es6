/**
 * Copyright (c) 2017-present, blockcollider.org developers, All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const RocksDb = require('rocksdb')

/**
 * Unified persistence interface
 */
export default class Persistence {
  _db: RocksDb; // eslint-disable-line no-undef

  constructor (location: string = '_data') {
    this._db = new RocksDb(location)
  }

  get db (): RocksDb {
    return this._db
  }

  /**
   * Open database
   * @param opts
   */
  open (opts: Object = {}): Promise<*> {
    return new Promise((resolve, reject) => {
      this.db.open(opts, (err) => {
        if (err) {
          return reject(err)
        }

        return resolve(true)
      })
    })
  }

  /**
   * Close database
   */
  close (): Promise<*> {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          return reject(err)
        }

        resolve(true)
      })
    })
  }

  /**
   * Put data into database
   * @param key
   * @param value
   * @param opts
   */
  put (key: string, value: string, opts: Object = {}): Promise<*> {
    return new Promise((resolve, reject) => {
      this.db.put(key, value, opts, (err) => {
        if (err) {
          return reject(err)
        }

        return resolve(true)
      })
    })
  }

  /**
   * Get data from database
   * @param key
   * @param opts
   */
  get (key: string, opts: Object = {}): Promise<*> {
    return new Promise((resolve, reject) => {
      this.db.get(key, opts, (err, value) => {
        if (err) {
          return reject(err)
        }

        return resolve(value)
      })
    })
  }

  /**
   * Delete data from database
   * @param key
   * @param opts
   */
  del (key: string, opts: Object = {}): Promise<*> {
    return new Promise((resolve, reject) => {
      this.db.del(key, opts, (err) => {
        if (err) {
          return reject(err)
        }

        resolve(true)
      })
    })
  }
}
