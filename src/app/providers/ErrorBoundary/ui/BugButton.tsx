import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// Компонент, который приводит к ошибке при нажатии на кнопку, для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const throwError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button onClick={throwError}>
            Throw error
        </Button>
    );
};
