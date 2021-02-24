# generate default.nix with:
# $ node2nix -d -l
(import ./default.nix { }).shell.overrideAttrs (oldAttrs: {
  shellHook = ''
    ${oldAttrs.shellHook}
    ln -sf $NODE_PATH
  '';
})
