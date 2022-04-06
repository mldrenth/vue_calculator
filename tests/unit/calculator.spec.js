import Calculator from '@/components/Calculator.vue'
import { shallowMount } from '@vue/test-utils'

describe("Calculator.vue", () => {
    let wrapper;
    let display;
    let sevenButton;
    beforeEach(() => {
        wrapper = shallowMount(Calculator)
        display = wrapper.find('#display')
        sevenButton = wrapper.find('#seven')
        
    })

    it("renders", () => {
        expect(wrapper.exists()).toBe(true)
    })

    it("has display", () => {
        expect(display.exists()).toBe(true)
    })

    it("has display of 0 at start", () => {
        expect(display.text()).toBe('0')
    })

    it("has 7 button", () => {
        expect(sevenButton.text()).toBe('7')
    })

    it("can change display to 7", async () => {
        await sevenButton.trigger('click')
        expect(display.text()).toBe('7')
    })
})