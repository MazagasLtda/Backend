import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export enum CharacterStatus {
  ACTIVE = 'ACTIVE',
}

export enum CharacterRank {
  BETA = 'BETA',
  BROXA = 'BROXA',
  CABECA_DE_PICA = 'CABECA_DE_PICA',
  MAZAGANENCE = 'MAZAGANENCE',
  RIBEIRINHO = 'RIBEIRINHO',
  MESTRE_DO_MATO = 'MESTRE_DO_MATO',
  REI_DO_CHARQUE = 'MAGNATA',
}

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare status: CharacterStatus

  @column()
  declare score: number

  @column()
  declare deaths: number

  @column()
  declare kills: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasOne(() => User)
  declare user: HasOne<typeof User>
}
