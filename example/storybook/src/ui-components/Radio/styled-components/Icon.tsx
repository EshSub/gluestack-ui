import { AsForwarder } from '@dank-style/react';
import { styled } from '../../styled';

export default styled(
  AsForwarder,
  {
    'w': '100%',
    'h': '100%',
    'p': 2,
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': 'transparent',
    'borderRadius': 999,

    ':checked': {
      'color': '$primary600',
      'opacity': 1,
      ':disabled': {
        opacity: 0.4,
      },
      ':hover': {
        'color': '$primary700',
        ':disabled': {
          color: '$primary600',
          opacity: 0.4,
        },
      },
    },
    '_dark': {
      ':checked': {
        'color': '$primary500',
        'opacity': 1,
        ':disabled': {
          color: '$primary500',
          opacity: 0.4,
        },
        ':hover': {
          'color': '$primary400',
          ':disabled': {
            color: '$primary500',
            opacity: 0.4,
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  }
);
