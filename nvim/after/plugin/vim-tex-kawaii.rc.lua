local status, vim_tex_kawaii = pcall(require, 'vim-tex-kawaii')
if (not status) then return end

vim_tex_kawaii.setup {}
