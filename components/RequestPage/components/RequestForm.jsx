import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { sendContactForm } from '../../../lib/api';
import { breakpoint } from '../../../lib/theme';
import { Button } from '../../ui/buttons/Button';
import { H2 } from '../../ui/Typography';
import { StyledLink } from '../../ui/Link';
import { Container } from "../../ui/layouts/Container";

export const RequestForm = () => {
    const [formData, setFormData] = useState({
        components: '',
        quantity: '',
        region: '',
        deadlines: '',
        name: '',
        email: '',
        tel: ''
    });
    const [emailWasSent, setEmailWasSent] = useState(false);
    const [hidePolicyBanner, setHidePolicyBanner] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hidePolicyBannerValue = localStorage.getItem('hidePolicyBanner');
            setHidePolicyBanner(hidePolicyBannerValue === 'true');
        }
    }, []);

    const resetForm = () => {
        setFormData({
            components: '',
            quantity: '',
            region: '',
            deadlines: '',
            name: '',
            email: '',
            tel: ''
        });
        setEmailWasSent(false);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        sendContactForm(formData).then(() => {
            setEmailWasSent(true);
            resetForm();
        }).catch((error) => {
            console.error("Error sending form: ", error);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const hideBanner = () => {
        localStorage.setItem('hidePolicyBanner', 'true');
        setHidePolicyBanner(true);
    };

    return (
        <Container>
            <RequestFormWrapper>
                <TitleWrapper>Рассчитаем стоимость и сроки доставки комплектующих</TitleWrapper>
                <FormWrapper>
                    {emailWasSent ? (
                        <ContactFormSuccessMessage>
                            Мы приняли Вашу заявку! Спасибо, что связались с нами!
                        </ContactFormSuccessMessage>
                    ) : (
                        <StyledContactForm onSubmit={onFormSubmit}>
                            <input
                                name="components"
                                type="text"
                                placeholder="Какие комплектующие вам необходимы?"
                                value={formData.components}
                                onChange={handleChange}
                            />
                            <input
                                name="quantity"
                                type="number"
                                placeholder="Какое количество вам необходимо?"
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                            <input
                                name="region"
                                type="text"
                                placeholder="В какой регион необходимо доставить?"
                                value={formData.region}
                                onChange={handleChange}
                            />
                            <input
                                name="deadlines"
                                type="text"
                                placeholder="Какие сроки вас устроят?"
                                value={formData.deadlines}
                                onChange={handleChange}
                            />
                            <input
                                name="name"
                                type="text"
                                placeholder="Как можно к вам обращаться?"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                name="email"
                                required
                                type="email"
                                placeholder="Ваш email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                name="tel"
                                type="tel"
                                placeholder="Ваш телефон"
                                required
                                value={formData.tel}
                                onChange={handleChange}
                            />
                            <Button primary type="submit">
                                Отправить
                            </Button>
                            <ContactFormDescription>
                        Нажимая кнопку "Отправить", Вы даете согласие на
                        <StyledLink href={'/policy#personalData'}> обработку персональных данных</StyledLink>
                    </ContactFormDescription>
                        </StyledContactForm>
                    )}
                </FormWrapper>
            </RequestFormWrapper>
        </Container>
    );
};

const RequestFormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 350px;
`;

const TitleWrapper = styled(H2)`
    flex: 1;
    width: 50%;
    padding-top: 150px;
`;

const FormWrapper = styled.div`
    flex: 1;
    width: 50%;
`;

const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;

    input,
    textarea {
        padding-left: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    input {
        box-sizing: border-box;
        min-height: 40px;
        margin-bottom: 20px;
        padding: 10px;
        color: #ccc;
    }

    textarea {
        max-height: 70px;
        max-width: 100%;
        &::placeholder {
            padding-top: 10px;
        }
    }
`;

const ContactFormSuccessMessage = styled.p`
    display: flex;
    padding-top: 20px;
    justify-content: center;
    height: 180px;
`;

const ContactFormDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.main};
    text-align: start;
`;

