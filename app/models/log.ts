import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Character from './character.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export enum LogType {
  KILL = 'KILL',
  DEATH = 'DEATH',
  RANK_UP = 'RANK_UP',
  RANK_DOWN = 'RANK_DOWN',
}

export default class Log extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare message: string

  @column()
  declare type: LogType

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Character)
  declare user: HasOne<typeof Character>
}
