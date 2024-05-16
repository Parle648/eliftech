import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './styles/paginationFeature.module.scss';
import updateEvents from './helpers/updateEvents';
import updateCurrentCount from './helpers/updateCurrentCount';

const PaginationFeature = () => {
    const eventsCount = useSelector((state: any) => state.Pages.value)
    const curretnPage = useSelector((state: any) => state.CurrentPage.value)

    const pagesCount = Array.from({ length: eventsCount / 10}, (_, index) => index + 1)
    
    useEffect(() => {
        updateEvents(0);
    }, []);

    function updatePage(event: React.MouseEvent<HTMLButtonElement>) {
        updateEvents(+event.currentTarget.innerText - 1);
        updateCurrentCount(+event.currentTarget.innerText);
    }

    return (
        <div className={styles.block}>
            <button onClick={() => {
                if(curretnPage > 1) {
                    updateCurrentCount(curretnPage - 1);
                    updateEvents(curretnPage - 2);
                }
            }}>{'<'}</button>
            {pagesCount.map((number: number) => {
                return <button className={`${styles.pageBtn} ${curretnPage === number && styles.currentPageBtn}`} onClick={updatePage}>{number}</button>
            })}
            <button onClick={() => {
                if (curretnPage < eventsCount / 10) {
                    updateCurrentCount(curretnPage + 1);
                    updateEvents(curretnPage);
                }
            }}>{'>'}</button>
        </div>
    );
};

export default PaginationFeature;