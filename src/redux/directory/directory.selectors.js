import { createSelector } from 'reselect'

export const directorySelector = state => state.directory;

export const selectDirectorySections = createSelector(
    [directorySelector],
    dir => dir.sections
)