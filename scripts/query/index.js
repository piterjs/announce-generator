export const id = id => document.getElementById(id)

export const $ = query => document.querySelector(query)

export const $$ = query => Array.from(document.querySelectorAll(query))