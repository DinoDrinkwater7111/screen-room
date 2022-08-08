import { configureStore } from '@reduxjs/toolkit';
import { appearanceSettingsSlice } from 'src/features/settings/appearanceSettingsSlice';
import { sourceSettingsSlice } from 'src/features/settings/sourcesSettingsSlice';
import { settingMenuSlice } from 'src/features/settings/settingMenuSlice';

export const store = configureStore({
    reducer: {
        appearanceSettings: appearanceSettingsSlice.reducer,
        sourceSettings: sourceSettingsSlice.reducer,
        settingMenu: settingMenuSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;