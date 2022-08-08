import { FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { appearanceSettingsActions } from 'src/features/settings/appearanceSettingsSlice';
import { $Input } from 'src/types/$';
import { useImmer } from 'use-immer';

interface I$ {
    nRow: $Input;
    nColumn: $Input;
}

export const AppearancePage: React.FC = (props) => {
    const appearanceSettings = useAppSelector(($) => $.appearanceSettings);
    const dispatch = useAppDispatch();

    const $default = React.useMemo<I$>(() => {
        return {
            nRow: {
                value: appearanceSettings.nRow.toString(),
            },
            nColumn: {
                value: appearanceSettings.nColumn.toString(),
            },
        };
    }, []);

    const [$, set$] = useImmer($default);

    const saveNRow = React.useCallback(() => {
        const numValue = Number($.nRow.value);
        if (Number.isInteger(numValue) && numValue > 0) {
            dispatch(appearanceSettingsActions.setNRow({ nRow: numValue }));
        } else {
            set$((draft) => {
                draft.nRow.errMsg = 'Please enter a positive integer.';
            });
        }
    }, [$.nRow.value, set$]);

    const nRowInput = React.useMemo<React.ReactNode>(() => {
        return (
            <FormControl isInvalid={$.nRow.errMsg !== undefined}>
                <FormLabel>Number of rows</FormLabel>
                <Input
                    type="number"
                    value={$.nRow.value}
                    onChange={(e) => {
                        set$((draft) => {
                            draft.nRow = {
                                value: e.target.value,
                                errMsg: undefined,
                            };
                        });
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') saveNRow();
                    }}
                    onBlur={saveNRow}
                />
                <FormErrorMessage>{$.nRow.errMsg}</FormErrorMessage>
            </FormControl>
        );
    }, [$.nRow, saveNRow, set$]);

    const saveNColumn = React.useCallback(() => {
        const numValue = Number($.nColumn.value);
        if (Number.isInteger(numValue) && numValue > 0) {
            dispatch(appearanceSettingsActions.setNColumn({ nColumn: numValue }));
        } else {
            set$((draft) => {
                draft.nColumn.errMsg = 'Please enter a positive integer.';
            });
        }
    }, [$.nColumn.value, set$]);

    const nColumnInput = React.useMemo<React.ReactNode>(() => {
        return (
            <FormControl isInvalid={$.nColumn.errMsg !== undefined}>
                <FormLabel>Number of columns</FormLabel>
                <Input
                    type="number"
                    value={$.nColumn.value}
                    onChange={(e) => {
                        set$((draft) => {
                            draft.nColumn = {
                                value: e.target.value,
                                errMsg: undefined,
                            };
                        });
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') saveNColumn();
                    }}
                    onBlur={saveNColumn}
                />
                <FormErrorMessage>{$.nColumn.errMsg}</FormErrorMessage>
            </FormControl>
        );
    }, [$.nColumn, saveNColumn, set$]);

    return (
        <Stack direction="column" spacing="6">
            {nRowInput}
            {nColumnInput}
        </Stack>
    );
};
