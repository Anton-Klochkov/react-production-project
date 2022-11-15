import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}
//test button call error
export const BugButton: FC<BugButtonProps> = () => {
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  const handleError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={handleError}>{t('throw error')}</Button>;
};
