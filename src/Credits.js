import React from 'react';
import lib from './lib';

export default function Credits() {
  const { credits } = lib();
  return (
    <section>
      Icon credits to{' '}
      <a
        href={credits.flaticon.url}
        title={credits.flaticon.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.flaticon.title}
      </a>
      :{' '}
      <a
        href={credits.nhorphai.url}
        title={credits.nhorphai.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.nhorphai.title}
      </a>
      ,{' '}
      <a
        href={credits.freepik.url}
        title={credits.freepik.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.freepik.title}
      </a>
      ,{' '}
      <a
        href={credits.eucalyp.url}
        title={credits.eucalyp.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.eucalyp.title}
      </a>
      ,{' '}
      <a
        href={credits.pixelperfect.url}
        title={credits.pixelperfect.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.pixelperfect.title}
      </a>
      ,{' '}
      <a
        href={credits.smashicons.url}
        title={credits.smashicons.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.smashicons.title}
      </a>
      ,{' '}
      <a
        href={credits.dimitry.url}
        title={credits.dimitry.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.dimitry.title}
      </a>
      ,{' '}
      <a
        href={credits.goodware.url}
        title={credits.goodware.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.goodware.title}
      </a>
      ,{' '}
      <a
        href={credits.icongeek26.url}
        title={credits.icongeek26.title}
        rel='noopener noreferrer nofollow'
        target='_blank'
      >
        {credits.icongeek26.title}
      </a>
    </section>
  );
}
