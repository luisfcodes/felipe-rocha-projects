import { screen } from "@testing-library/dom"
import { render } from "@testing-library/react"

import Steps from './index'

describe('Render Steps component with steps', () => {
  const elements = () => {
    const stepOneElement = screen.getByLabelText("Liberação")
    const stepTwoElement = screen.getByLabelText("Processamento")
    const stepThreeElement = screen.getByLabelText("Confirmação")
    const stepFourElement = screen.getByLabelText("Finalização")

    return {
      stepOneElement,
      stepTwoElement,
      stepThreeElement,
      stepFourElement
    }
  }

  it('Should render on step one', () => {
    render(<Steps active={1}/>)

    const { stepOneElement, stepTwoElement, stepThreeElement, stepFourElement } = elements()

    expect(stepOneElement).not.toContainHTML('svg')
    expect(stepTwoElement).not.toContainHTML('svg')
    expect(stepThreeElement).not.toContainHTML('svg')
    expect(stepFourElement).not.toContainHTML('svg')
  })

  it('Should render on step two', () => {
    render(<Steps active={2}/>)

    const { stepOneElement, stepTwoElement, stepThreeElement, stepFourElement } = elements()

    expect(stepOneElement).toContainHTML('svg')
    expect(stepTwoElement).not.toContainHTML('svg')
    expect(stepThreeElement).not.toContainHTML('svg')
    expect(stepFourElement).not.toContainHTML('svg')
  })

  it('Should render on step three', () => {
    render(<Steps active={3}/>)

    const { stepOneElement, stepTwoElement, stepThreeElement, stepFourElement } = elements()

    expect(stepOneElement).toContainHTML('svg')
    expect(stepTwoElement).toContainHTML('svg')
    expect(stepThreeElement).not.toContainHTML('svg')
    expect(stepFourElement).not.toContainHTML('svg')
  })

  it('Should render on step four', () => {
    render(<Steps active={4}/>)

    const { stepOneElement, stepTwoElement, stepThreeElement, stepFourElement } = elements()

    expect(stepOneElement).toContainHTML('svg')
    expect(stepTwoElement).toContainHTML('svg')
    expect(stepThreeElement).toContainHTML('svg')
    expect(stepFourElement).not.toContainHTML('svg')
  })

  it('Should render with all steps complete', () => {
    render(<Steps active={5}/>)

    const { stepOneElement, stepTwoElement, stepThreeElement, stepFourElement } = elements()

    expect(stepOneElement).toContainHTML('svg')
    expect(stepTwoElement).toContainHTML('svg')
    expect(stepThreeElement).toContainHTML('svg')
    expect(stepFourElement).toContainHTML('svg')
  })
})