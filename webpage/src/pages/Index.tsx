import { Grid, GridItem } from '@chakra-ui/react';
import * as React from 'react';
import { useAppSelector } from 'src/app/hooks';
import { TextSource } from 'src/classes/Source';
import { SourceDisplay } from 'src/components/SourceDisplay';

export function Index(): ReturnType<React.FC> {
    const appearanceSettings = useAppSelector(($) => $.appearanceSettings);
    const sourceSettings = useAppSelector(($) => $.sourceSettings);

    const gridItems: React.ReactNode[] = React.useMemo(() => {
        const result: React.ReactNode[] = [];
        let count = 1;
        for (let i = 0; i < appearanceSettings.nRow; i++) {
            for (let j = 0; j < appearanceSettings.nColumn; j++) {
                result.push(
                    <GridItem key={count} overflow="auto">
                        <SourceDisplay
                            source={sourceSettings.sources[count - 1] ?? new TextSource({ text: `Box ${count}` })}
                        />
                    </GridItem>
                );
                count++;
            }
        }
        return result;
    }, [appearanceSettings.nRow, appearanceSettings.nColumn, sourceSettings.sources]);

    return (
        <Grid
            templateRows={`repeat(${appearanceSettings.nRow}, 1fr)`}
            templateColumns={`repeat(${appearanceSettings.nColumn}, 1fr)`}
            height="100vh"
            width="100vw"
        >
            {gridItems}
        </Grid>
    );
}
