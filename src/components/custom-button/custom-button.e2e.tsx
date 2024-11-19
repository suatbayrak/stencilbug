import { newE2EPage } from '@stencil/core/testing';

describe('custom-button', () => {
  const props = {
    onClick: jest.fn(),
  };

  it('should render the button', async () => {
    const page = await newE2EPage();
    await page.setViewport({ width: 400, height: 800 });
    await page.setContent('<custom-button>some text</custom-button>');
    await page.$eval(
      'custom-button',
      (elm, { onClick }) => {
        elm.onClick = onClick;
      },
      props,
    );

    const customButton = await page.find('custom-button');
    const buttonElement = await page.find('custom-button >>> button');

    expect(customButton).not.toBeFalsy();
    expect(buttonElement?.classList.contains('primary')).toBe(true);
    expect(buttonElement?.classList.contains('medium')).toBe(true);
    expect(buttonElement?.classList.contains('full-width')).toBe(true);
  });

  it('should render the button and click ', async () => {
    const page = await newE2EPage({
      waitUntil: 'networkidle2',
    });
    await page.setViewport({ width: 400, height: 800 });
    await page.setContent('<custom-button>some text</custom-button>');
    await page.waitForChanges();
    await page.$eval(
      'custom-button',
      (elm, { onClick }) => {
        elm.onClick = onClick;
      },
      props,
    );
    await page.waitForChanges();
    await page.exposeFunction('onClick', () => console.log('hi'));
    await page.waitForChanges();

    const customButton = await page.find('custom-button');
    customButton.setProperty('onClick', props.onClick);
    expect(customButton).not.toBeFalsy();

    const buttonElement = await page.find('custom-button >>> button');

    console.log('buttonElement ', buttonElement.triggerEvent('onClick'));
    await buttonElement?.click();
    await page.waitForChanges();

    expect(props.onClick).toHaveBeenCalled();
  });

  it('should render disabled button on giving disabled prop', async () => {
    const page = await newE2EPage();
    await page.setViewport({ width: 400, height: 800 });
    await page.setContent('<custom-button disabled>some text</custom-button>');
    await page.$eval(
      'custom-button',
      (elm, { onClick }) => {
        elm.onClick = onClick;
      },
      props,
    );

    const buttonElement = await page.find('custom-button >>> button');
    await buttonElement?.click();

    expect(props.onClick).toHaveBeenCalledTimes(0);
  });

  //   it('applies the correct classes for variant and size', async () => {
  //     const page = await newE2EPage();
  //     await page.setContent(
  //       '<custom-button variant="secondary" size="small"></custom-button>',
  //     );

  //     const button = await page.find('custom-button >>> button');
  //     const classList = await button.getProperty('className');
  //     expect(classList).toContain('secondary');
  //     expect(classList).toContain('small');
  //   });

  //   it('disables the button when disabled prop is true', async () => {
  //     const page = await newE2EPage();
  //     await page.setContent('<custom-button disabled></custom-button>');

  //     const button = await page.find('custom-button >>> button');
  //     const isDisabled = await button.getProperty('disabled');
  //     expect(isDisabled).toBe(true);
  //   });

  //   it('triggers onClick event when clicked', async () => {
  //     const page = await newE2EPage();
  //     const spy = await page.spyOnEvent('click');

  //     await page.setContent('<custom-button></custom-button>');
  //     const button = await page.find('custom-button >>> button');
  //     await button.click();

  //     expect(spy).toHaveReceivedEventTimes(1);
  //   });

  //   it('shows spinner class when spinner prop is true', async () => {
  //     const page = await newE2EPage();
  //     await page.setContent('<custom-button spinner></custom-button>');

  //     const button = await page.find('custom-button >>> button');
  //     const classList = await button.getProperty('className');
  //     expect(classList).toContain('spinner');
  //   });
});
