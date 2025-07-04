'use client';

import { useContext } from 'react';
import { Accordion, AccordionCollapse, AccordionContext, Card, CardHeader, useAccordionButton } from 'react-bootstrap';
import clsx from 'clsx';
import IconifyIcon from '../wrappers/IconifyIcon';
const CustomToggle = ({
  children,
  eventKey,
  containerClass,
  linkClass,
  callback
}) => {
  const {
    activeEventKey
  } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = activeEventKey === eventKey;
  return <div role="button" className={clsx(linkClass, {
    collapsed: !isCurrentEventKey
  })} onClick={decoratedOnClick}>
      <CardHeader>
        <h5 className={containerClass}>
          {children} <IconifyIcon icon="lucide:chevron-down" className="icon-xs accordion-arrow" />
        </h5>
      </CardHeader>
    </div>;
};
const FAQContent = () => {
  const faqs = [{
    question: 'Can I use this template for my client?',
    ans: ' Yup, the marketplace license allows you to use this theme in any end products.For more information on licenses, please refere license terms on marketplace.'
  }, {
    question: 'Can this theme work with WordPress?',
    ans: "No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme."
  }, {
    question: 'How do I get help with the theme?',
    ans: 'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback.We are here to help anytime.'
  }, {
    question: 'Will you regularly give updates of Omaics ?',
    ans: 'Yes, We will update the Omaics regularly. All the future updates would be available without any cost.'
  }];
  return <div id="faqContent">
      <Accordion defaultActiveKey="0" className="custom-accordionwitharrow" id="accordionExample">
        {(faqs || []).map((item, idx) => {
        return <Card className="mb-2 border rounded-sm" key={idx}>
              <CustomToggle eventKey={String(idx)} containerClass="my-1 fw-medium" linkClass="text-dark">
                {item.question}
              </CustomToggle>
              <AccordionCollapse eventKey={String(idx)}>
                <Card.Body className="text-muted pt-1">{item.ans}</Card.Body>
              </AccordionCollapse>
            </Card>;
      })}
      </Accordion>
    </div>;
};
export default FAQContent;