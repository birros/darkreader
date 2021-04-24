project('darkreader', ['c'])

npm = find_program('npm')
res = run_command(npm, 'ci')
if res.returncode() == 0
    message(res.stderr().strip())
    message('NPM CI: ok')
else
    message(res.stderr().strip())
    error('NPM CI: failed')
endif


#
# To include new files just touch this file :
#   e.g. : touch meson.build
#
git = find_program('git')
res = run_command(git, 'ls-files', '-o', '-c', '--exclude-standard')
if res.returncode() == 0
    list = res.stdout().strip().split('\n')
endif

current_source_dir = meson.current_source_dir()
build_root = meson.build_root()
darkreader = custom_target(
    'darkreader',
    command: [
        join_paths(current_source_dir, 'web-archives/scripts/build.sh'),
        current_source_dir,
        join_paths(build_root, '@OUTPUT@')
    ],
    depend_files: list,
    output: 'darkreader.js'
)
