import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
        Страница на найдена
    </div>
);
