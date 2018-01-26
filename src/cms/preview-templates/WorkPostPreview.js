import React from 'react';
import { WorkPostTemplate } from '../../templates/work';

const WorkPostPreview = ({ entry, widgetFor }) => (
  <WorkPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default WorkPostPreview;
