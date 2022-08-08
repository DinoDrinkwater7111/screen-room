import { FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { sourceTypes } from 'src/app/constants';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { ImageSource, Source, TextSource } from 'src/classes/Source';
import { sourceSettingsActions } from 'src/features/settings/sourcesSettingsSlice';
import { SourceTypeSelect } from './SourceTypeSelect';

interface I$ {}

export const SourcePage: React.FC = (props) => {
    const appearanceSettings = useAppSelector(($) => $.appearanceSettings);
    const sourceSettings = useAppSelector(($) => $.sourceSettings);
    const dispatch = useAppDispatch();

    const $default = React.useMemo<I$>(() => {
        return {};
    }, []);

    const setSource = React.useCallback(
        (arg: { sourceType: typeof sourceTypes[number]; value: string; index: number }) => {
            let source: Source;
            if (arg.value.trim().length === 0) {
                source = new TextSource({ text: `Box ${arg.index + 1}` });
            } else {
                switch (arg.sourceType) {
                    case 'Image':
                        source = new ImageSource({ url: arg.value.trim() });
                        break;
                    default:
                        source = new TextSource({ text: `Unknown source type: ${arg.sourceType}` });
                }
            }
            dispatch(sourceSettingsActions.setSourceAt({ source: source, index: arg.index }));
        },
        [dispatch]
    );

    const sourceInputs = React.useMemo<React.ReactNode>(() => {
        const result: React.ReactNode[] = [];
        for (let i = 0; i < appearanceSettings.nColumn * appearanceSettings.nRow; i++) {
            result.push(
                <FormControl key={i}>
                    <FormLabel>{`Box ${i}`}</FormLabel>
                    <InputGroup>
                        <InputLeftAddon p="0">
                            {/* TODO */}
                            <SourceTypeSelect
                                sourceType="Image"
                                onSourceTypeChange={() => {
                                    //TODO
                                }}
                            />
                        </InputLeftAddon>
                        <Input
                            defaultValue={
                                //TODO
                                (sourceSettings.sources[i] as any)?.url ?? ''
                            }
                            type="url"
                            placeholder="Image URL"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter')
                                    setSource({ sourceType: 'Image', value: e.target.value, index: i });
                            }}
                            onBlur={(e) => {
                                setSource({ sourceType: 'Image', value: e.target.value, index: i });
                            }}
                        />
                    </InputGroup>
                </FormControl>
            );
        }
        return result;
    }, [appearanceSettings.nColumn, appearanceSettings.nRow, setSource, sourceSettings.sources]);

    return (
        <Stack direction="column" spacing={6}>
            {sourceInputs}
        </Stack>
    );
};
