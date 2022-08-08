import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppearanceSettingsState {
    nRow: number;
    nColumn: number;
}

const initialState: AppearanceSettingsState = {
    nRow: 1,
    nColumn: 1,
};

export const appearanceSettingsSlice = createSlice({
    name: 'appearanceSettings',
    initialState,
    reducers: {
        setNRow: (state, { payload }: PayloadAction<{ nRow: number }>) => {
            if (payload.nRow > 0 && Number.isInteger(payload.nRow)) state.nRow = payload.nRow;
        },
        setNColumn: (state, { payload }: PayloadAction<{ nColumn: number }>) => {
            if (payload.nColumn > 0 && Number.isInteger(payload.nColumn)) state.nColumn = payload.nColumn;
        },
    },
});

export const appearanceSettingsActions = appearanceSettingsSlice.actions;
