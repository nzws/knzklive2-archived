import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Check, CheckCircle, PlayCircle } from 'react-feather';
import { ComponentsContainer, ComponentsTitle } from './common';
import { Button, ButtonIcon } from '../../ui/button';

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
        <ComponentsTitle>Skeleton</ComponentsTitle>

        <Button color="primary" skeleton>
          Primary
        </Button>
        <Button color="secondary" skeleton>
          Secondary
        </Button>
        <Button color="success" skeleton>
          Success
        </Button>
        <Button color="warning" skeleton>
          Warning
        </Button>
        <Button color="danger" skeleton>
          Danger
        </Button>
        <Button color="white" skeleton>
          White
        </Button>
      </ComponentsContainer>

      <ComponentsContainer>
        <ComponentsTitle>Disabled</ComponentsTitle>

        <Button color="primary" disabled>
          Primary
        </Button>
        <Button color="secondary" disabled>
          Secondary
        </Button>
        <Button color="success" disabled>
          Success
        </Button>
        <Button color="warning" disabled>
          Warning
        </Button>
        <Button color="danger" disabled>
          Danger
        </Button>
      </ComponentsContainer>

      <ComponentsContainer>
        <ComponentsTitle>Size</ComponentsTitle>

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
        <ComponentsTitle>Icon / Loading</ComponentsTitle>

        <div>
          <ButtonIcon color="primary" icon={CheckCircle}>
            Button with Icon
          </ButtonIcon>
        </div>

        <div>
          <ButtonIcon
            color="primary"
            icon={PlayCircle}
            isLoading={isLoading}
            onClick={handleClick}
          >
            Click to Loading
          </ButtonIcon>
        </div>
      </ComponentsContainer>

      <ComponentsContainer>
        <ComponentsTitle>Usage example</ComponentsTitle>

        <div>
          <Button color="secondary" skeleton>
            Cancel
          </Button>
        </div>

        <div>
          <ButtonIcon
            color="primary"
            icon={Check}
            isLoading={isLoading}
            onClick={handleClick}
          >
            Submit
          </ButtonIcon>
        </div>
      </ComponentsContainer>
    </Fragment>
  );
};
