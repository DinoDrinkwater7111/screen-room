import * as React from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { Modal as AppSettingsModal } from 'src/components/AppSettings/Modal';
import { settingMenuActions } from 'src/features/settings/settingMenuSlice';
import { Index } from './pages/Index';

export const App: React.FC = (props) => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        document.title = 'Screen Room - Esc for Menu';
        function keyDownListener(e: KeyboardEvent): void {
            switch (e.key) {
                case 'Escape': {
                    e.preventDefault();
                    dispatch(settingMenuActions.show());
                }
            }
        }
        window.addEventListener('keydown', keyDownListener);
        return () => {
            window.removeEventListener('keydown', keyDownListener);
        };
    }, []);

    return (
        <>
            <Index />
            <AppSettingsModal />
        </>
    );
};
