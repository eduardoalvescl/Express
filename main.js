import express from 'express'
import {o, add} from 'dek'

export let name = 'express'

export let dependencies = []

export default async () => {
    add('express', express)
    add('app', await express())
}

export let cli = () => {

}