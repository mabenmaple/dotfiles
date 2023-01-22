local status, ts = pcall(require, 'nvim-treesitter.configs')
if (not status) then return end

ts.setup {
  highlight = {
    enable = true,
    disable = { "latex" },
    additional_vim_regex_highlighting = { "latex", "markdown" },
  },
  indent = {
    enable = true,
    disable = {}
  },
  ensure_installed = {
    'tsx',
    'lua',
    'json',
    'css',
    'c',
    'cpp',
    'python',
    'javascript',
    'markdown',
    'rust'
  },
  autotag = {
    enable = true,
  }
}
