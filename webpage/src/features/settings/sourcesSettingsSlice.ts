import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { Source } from 'src/classes/Source';

interface SourceSettingsState {
    sources: Source[];
}

const initialState: SourceSettingsState = {
    sources: [],
};

export const sourceSettingsSlice = createSlice({
    name: 'sourceSettings',
    initialState,
    reducers: {
        setSourceAt: (state, { payload }: PayloadAction<{ source: Source; index: number }>) => {
            state.sources[payload.index] = payload.source;
        },
        emptySources: (state) => {
            state.sources = [];
        },
        removeSourceAt: (state, { payload }: PayloadAction<{ index: number }>) => {
            state.sources.splice(payload.index, 1);
        },
        insertSourceAt: (state, { payload }: PayloadAction<{ source: Source; index: number }>) => {
            state.sources.splice(payload.index, 0, payload.source);
        },
    },
});

export const sourceSettingsActions = sourceSettingsSlice.actions;
