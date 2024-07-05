import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import ContactForm from "@/app/components/ContactForm";

describe('Navbar component', () => {
    it('renders Logo', () => {
      const { getByAltText } = render(<Navbar />);
      const logoImage = getByAltText('logo');
      expect(logoImage).toBeInTheDocument();
    });
  });

describe('Header component', () => {
    it('renders Foto personal', () => {
        const { getByAltText } = render(<Header />);
        const logoImage = getByAltText('foto personal');
        expect(logoImage).toBeInTheDocument();
    });
});

describe('About component', () => {
    it('renders Logos tecnologias', () => {
      const { getAllByRole } = render(<About />);
      const logos = getAllByRole('img');
      expect(logos).toHaveLength(10);
      expect(logos[0]).toHaveAttribute('alt', 'AWS');
      expect(logos[1]).toHaveAttribute('alt', 'Firebase');
      expect(logos[2]).toHaveAttribute('alt', 'JS');
      expect(logos[3]).toHaveAttribute('alt', 'Mongo');
      expect(logos[4]).toHaveAttribute('alt', 'NextJS');
      expect(logos[5]).toHaveAttribute('alt', 'Node');
      expect(logos[6]).toHaveAttribute('alt', 'Postgres');
      expect(logos[7]).toHaveAttribute('alt', 'React');
      expect(logos[8]).toHaveAttribute('alt', 'Redux');
      expect(logos[9]).toHaveAttribute('alt', 'Tailwind');
    });
  });

describe('ContactForm component', () => {
    it('renders Formulario con sus inputs y labels', () => {
        const { getByText, getByLabelText } = render(<ContactForm />);
        const nameInput = getByLabelText('Nombre');
        const emailInput = getByLabelText('Email');
        const messageInput = getByLabelText('Mensaje');
        const submitButton = getByText('Contactar');
        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(messageInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('Valida el envío del formulario y el manejo de errores', () => {
        const { getByText, getByLabelText } = render(<ContactForm />);
        const nameInput = getByLabelText('Nombre');
        const emailInput = getByLabelText('Email');
        const messageInput = getByLabelText('Mensaje');
        const submitButton = getByText('Contactar');

        fireEvent.change(nameInput, { target: { value: '' } });
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.change(messageInput, { target: { value: '' } });
        fireEvent.click(submitButton);

        waitFor(() => {
        const errorMessage = getByText('Por favor entrar un nombre');
        expect(errorMessage).toBeInTheDocument();
        });
    });
});