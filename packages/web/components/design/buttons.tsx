import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { CheckCircle, PlayCircle } from 'react-feather';
import { ComponentsContainer } from './common';
import { Button, ButtonIcon } from '../button';

export const Buttons: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => setIsLoading(true), []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    const clear = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(clear);
  }, [isLoading]);

  return (
    <Fragment>
      <ComponentsContainer>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </ComponentsContainer>

      <ComponentsContainer>
        <Button color="primary" skeleton>
          Skeleton Primary
        </Button>
        <Button color="secondary" skeleton>
          Skeleton Secondary
        </Button>
        <Button color="success" skeleton>
          Skeleton Success
        </Button>
        <Button color="warning" skeleton>
          Skeleton Warning
        </Button>
        <Button color="danger" skeleton>
          Skeleton Danger
        </Button>
        <Button color="white" skeleton>
          Skeleton White
        </Button>
      </ComponentsContainer>

      <ComponentsContainer>
        <Button color="primary" disabled>
          Disabled Primary
        </Button>
        <Button color="secondary" disabled>
          Disabled Secondary
        </Button>
        <Button color="success" disabled>
          Disabled Success
        </Button>
        <Button color="warning" disabled>
          Disabled Warning
        </Button>
        <Button color="danger" disabled>
          Disabled Danger
        </Button>
      </ComponentsContainer>

      <ComponentsContainer>
        <div>
          <Button color="primary" size="small">
            Small
          </Button>
        </div>
        <div>
          <Button color="primary" size="normal">
            Normal Normal
          </Button>
        </div>
        <div>
          <Button color="primary" size="large">
            Large Large Large
          </Button>
        </div>
      </ComponentsContainer>

      <ComponentsContainer>
        <ButtonIcon color="primary" icon={CheckCircle}>
          Button with Icon
        </ButtonIcon>

        <ButtonIcon
          color="primary"
          icon={PlayCircle}
          isLoading={isLoading}
          onClick={handleClick}
        >
          Click to Loading
        </ButtonIcon>
      </ComponentsContainer>
    </Fragment>
  );
};
