require('base')
require('highlights')
require('maps')
require('plugins')

local has = function(x)
  return vim.fn.has(x) == 1
end

local is_mac = has "macunix"
local is_windows = has "win64"

if is_mac then
  require('macos')
end
if is_windows then
  require('windows')
end
