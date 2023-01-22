local keymap = vim.keymap
vim.g.mapleader = " "

-- do not yank with x
keymap.set('n', 'x', '"_x')

-- increment decrement
keymap.set('n', '+', '<C-a>')
keymap.set('n', '-', '<C-x>')

-- Delete a word backwards
keymap.set('n', 'dw', 'vb"_d')

-- select all
keymap.set('n', '<Leader>a', 'gg<S-v>G')

-- new tab
keymap.set('n', 'te', ':tabedit<Return>', { silent = true })
-- split windows
keymap.set('n', 'ss', ':split<Return><C-w>w', { silent = true })
keymap.set('n', 'sv', ':vsplit<Return><C-w>w', { silent = true })
-- move windows
keymap.set('n', '<Leader><Leader>', '<C-w>w')
keymap.set('', 'sh', '<C-w>h')
keymap.set('', 'sk', '<C-w>k')
keymap.set('', 'sj', '<C-w>j')
keymap.set('', 'sl', '<C-w>l')

-- resize window
keymap.set('n', '<C-w><left>', '<C-w><')
keymap.set('n', '<C-w><right>', '<C-w>>')
keymap.set('n', '<C-w>up', '<C-w>+')
keymap.set('n', '<C-w>down', '<C-w>-')

-- Open pdf in zathura
keymap.set('', '<Leader>s', ':!zathura %:p:r.pdf<CR>')
