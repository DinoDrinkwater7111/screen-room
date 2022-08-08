import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appSettingsPages } from 'src/app/constants';

interface AppearanceSettingsState {
    isShow: boolean;
}

const initialState: AppearanceSettingsState = {
    isShow: false,
};

export const settingMenuSlice = createSlice({
    name: 'settingMenu',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isShow = !state.isShow;
        },
        show: (state) => {
            state.isShow = true;
        },
        hide: (state) => {
            state.isShow = false;
        },
    },
});

export const settingMenuActions = settingMenuSlice.actions;
