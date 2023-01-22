local status, packer = pcall(require, 'packer')
if (not status) then
  print("packer not installed")
  return
end

vim.cmd [[packadd packer.nvim]]

packer.startup(function(use)
  use 'wbthomason/packer.nvim'
  use {
    'svrana/neosolarized.nvim',
    requires = { 'tjdevries/colorbuddy.nvim' }
  }
  use 'kyazdani42/nvim-web-devicons' -- file icons
  use 'hoob3rt/lualine.nvim' -- lualineee
  use 'glepnir/lspsaga.nvim' -- lsp ui
  use 'neovim/nvim-lspconfig' -- lsp
  use 'onsails/lspkind-nvim' -- pictograms :3
  use 'hrsh7th/cmp-buffer' -- nvim cmp source for buffer words
  use 'hrsh7th/cmp-nvim-lsp' -- nvim-cmp source for nvim builtin lsp
  use 'hrsh7th/nvim-cmp' -- completion
  use 'L3MON4D3/LuaSnip' -- Snippet engine
  use {
    'nvim-treesitter/nvim-treesitter',
    run = ':TSUpdate'
  }

  use 'jose-elias-alvarez/null-ls.nvim' -- nvim as lang servr to inject lsp diagnostics , code actions, etc via lua
  use 'MunifTanjim/prettier.nvim' -- prettier for nvim
  use 'williamboman/mason.nvim' -- lsp handler
  use 'williamboman/mason-lspconfig.nvim'

  use 'windwp/nvim-autopairs'
  use 'windwp/nvim-ts-autotag'

  use 'nvim-lua/plenary.nvim' -- utilities
  use 'nvim-telescope/telescope.nvim'
  use 'nvim-telescope/telescope-file-browser.nvim'

  use 'norcalli/nvim-colorizer.lua'
  use 'akinsho/nvim-bufferline.lua'

  use 'lewis6991/gitsigns.nvim'
  use 'dinhhuy258/git.nvim' -- git blame n browse

  -- Latex shit
  use 'anufrievroman/vim-tex-kawaii'
  use {
    'lervag/vimtex',
    vim.cmd([[
      let g:vimtex_view_method = 'skim'
      let g:vimtex_compiler_latexmk = {'continuous': 1}
      let g:vimtex_quickfix_open_on_warning = 0
    ]])
  }

end)
