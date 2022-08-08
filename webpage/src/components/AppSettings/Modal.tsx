import {
    Button,
    Modal as ChakraModal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import * as React from 'react';
import { appSettingsPages } from 'src/app/constants';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { settingMenuActions } from 'src/features/settings/settingMenuSlice';
import { AppearancePage } from './AppearancePage';
import { SourcePage } from './SourcePage';

export const Modal: React.FC = (props) => {
    const settingMenu = useAppSelector(($) => $.settingMenu);
    const dispatch = useAppDispatch();

    const onClose = React.useCallback(() => {
        dispatch(settingMenuActions.hide());
    }, [dispatch]);

    const tabs = React.useMemo(() => {
        return (
            <Tabs>
                <TabList>
                    {appSettingsPages.map((page) => (
                        <Tab key={page}>{page}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {appSettingsPages.map((page) => {
                        let pageEl: React.ReactNode;
                        switch (page) {
                            case 'Appearance':
                                pageEl = <AppearancePage />;
                                break;
                            case 'Sources':
                                pageEl = <SourcePage />;
                                break;
                            default:
                                pageEl = `Unknown page: ${page};`;
                        }
                        return <TabPanel key={page}>{pageEl}</TabPanel>;
                    })}
                </TabPanels>
            </Tabs>
        );
    }, []);

    return (
        <ChakraModal
            onClose={onClose}
            isOpen={settingMenu.isShow}
            scrollBehavior="inside"
            isCentered
            closeOnEsc={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Settings</ModalHeader>
                <ModalBody>{tabs}</ModalBody>
                <ModalFooter>
                    <Stack direction="row">
                        <Button backgroundColor="gray" onClick={onClose}>
                            Close
                        </Button>
                    </Stack>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    );
};
