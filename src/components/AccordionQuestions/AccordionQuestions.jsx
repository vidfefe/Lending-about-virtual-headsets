import { Accordion, AccordionItem as Item} from '@szhsin/react-accordion';
import {ReactComponent as ArrowClose} from './../../img/icons/arrow_close.svg';

import styles from './AccordionQuestions.module.scss'


const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <ArrowClose className={styles.arrow} />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );
  

export default function AccordionFaq( {transition, transitionTimeout , questions} ){
    return(
                <Accordion transition={transition} transitionTimeout={transitionTimeout}>
                    {questions.map(({ header, content }, i) => (
                        <AccordionItem header={header} key={i}>
                            <p>{content}</p>
                        </AccordionItem>
                    ))}
                </Accordion>

    );
}


