import { IService } from "@/interface/services";

/**    id: number;
    pathImage: string;
    altDescription: string;
    serviceName: string;
    description: string;
    serviceList: Array<object>; */
export const objService: Array<IService> = [
    {
        id: 1,
        pathImage: '/dog-services.png',
        altDescription: 'dog services',
        serviceName: 'Banho e tosa',
        description: 'Mantenha seu pet saudável com nossos serviços de higiene e cuidados especiais.',
        serviceList: [
            { id: 1, description: 'O banho para a prevenção de problemas de pele, como alergias.' },
            { id: 2, description: 'A hidratação estimula o crescimento de uma pelagem saudável e brilhante.' },
            { id: 3, description: 'A tosa higiênica facilita a limpeza do seu pet.' }
        ]
    },
    {
        id: 2,
        pathImage: '/transport-icon.png',
        altDescription: 'transport services',
        serviceName: 'Leva e trás',
        description: 'Buscamos e levamos o seu pet, em um raio de até 5km.',
        serviceList: [
            { id: 1, description: 'Poupe seu tempo e esforço.' },
            { id: 2, description: 'Flexibilidade de horários para se adequar à sua agenda.' },
            { id: 3, description: 'Ambiente tranquilo e seguro durante o transporte.' }
        ]
    },
    {
        id: 3,
        pathImage: '/hospedagem-icon.png',
        altDescription: 'accommodation services',
        serviceName: 'Hospedagem',
        description: 'Proporcionamos uma estadia confortável e segura para o seu pet.',
        serviceList: [
            { id: 1, description: 'Ambiente acolhedor e seguro.' },
            { id: 2, description: 'Socialização e diversão.' },
            { id: 3, description: 'Paz de espírito durante sua ausência.' }
        ]
    }
]