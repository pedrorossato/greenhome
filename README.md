# GreenHome - Sistema de Site Institucional

Bem-vindo ao repositório Git do sistema web completo da GreenHome, construtora e incorporadora comprometida com a sustentabilidade e o conforto em cada projeto, localizada em Santa Maria, RS.

## Visão Geral

O **GreenHome** é um sistema web completo desenvolvido para apresentar a empresa, seus empreendimentos e serviços de forma profissional e atrativa. O sistema consiste em um site institucional moderno e responsivo com funcionalidades avançadas de gestão imobiliária.

## Arquitetura do Sistema

### Backend (API)
- **Framework**: Spring Boot 3.1.1 com Java 17
- **Banco de Dados**: PostgreSQL (versão mais recente)
- **Segurança**: Spring Security com JWT (JSON Web Tokens)
- **ORM**: JPA/Hibernate com Flyway para migrações
- **Armazenamento**: AWS S3 para arquivos (fotos de usuários e documentos de propriedades)
- **Email**: Integração com Gmail SMTP para notificações
- **Cache**: Spring Cache para otimização de performance

### Frontend
- **Framework**: Next.js 14 com React 18
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: Radix UI para componentes acessíveis
- **Mapas**: Leaflet para visualização de localizações
- **Formulários**: React Hook Form com validação Zod
- **Estado**: SWR para gerenciamento de estado do servidor

### Infraestrutura
- **Containerização**: Docker com Docker Compose
- **Banco**: PostgreSQL em container
- **Deploy**: Configuração para produção com containers

## Funcionalidades Principais

### 🏠 Site Institucional
- **Página Inicial**: Apresentação da empresa com hero section, missão, visão e valores
- **Sobre a Empresa**: História da GreenHome fundada em 2019, especializada em residenciais de alta qualidade
- **Serviços**: Compra e venda de imóveis, administração de obras, urbanização e construção de edifícios
- **Design Responsivo**: Interface moderna com gradientes azul e verde, totalmente responsiva

### 🏢 Gestão de Empreendimentos
- **Catálogo de Propriedades**: Visualização de todos os empreendimentos
- **Detalhes de Propriedades**: Informações completas incluindo:
  - Dados básicos (nome, endereço, descrição)
  - Localização com coordenadas GPS
  - Status do empreendimento (planejamento, construção, finalizado)
  - Tipo de propriedade (residencial, comercial, etc.)
- **Documentos**: Upload e visualização de documentos relacionados aos empreendimentos
- **Galeria de Imagens**: Carrossel de imagens para cada propriedade

### 🏗️ Gestão de Edifícios
- **Progresso da Obra**: Acompanhamento detalhado das etapas:
  - Terraplanagem, fundação, estrutura
  - Alvenaria, elétrica, hidráulica
  - Acabamento
- **Amenidades**: Controle de facilidades como:
  - Academia, hall de entrada, ar condicionado
  - Gás central, interfone, portão eletrônico
  - Elevador, bicicletário, salão de festas, playground
- **Apartamentos**: Gestão de unidades com:
  - Área, número de quartos e banheiros
  - Garagem, área de serviço, varanda
  - Churrasqueira, closet

### 📝 Sistema de Blog
- **Posts**: Criação e gerenciamento de conteúdo
- **Editor Rico**: Interface para criação de posts com formatação
- **Paginação**: Sistema de navegação entre posts
- **Cache**: Otimização de performance com cache de posts

### 👥 Sistema de Usuários
- **Autenticação**: Login e registro de usuários
- **Perfis**: Diferentes níveis de acesso (USER, ADMIN)
- **Fotos de Perfil**: Upload e gerenciamento de avatares
- **Sessões**: Gerenciamento de sessões com JWT

### ⚙️ Área Administrativa
- **Dashboard**: Painel de controle para administradores
- **CRUD Completo**: Gerenciamento de:
  - Propriedades e edifícios
  - Apartamentos
  - Posts do blog
  - Usuários
- **Tabelas Dinâmicas**: Interface moderna com paginação e filtros
- **Upload de Arquivos**: Gerenciamento de documentos e imagens

### 📞 Formulário de Contato
- **Get in Touch**: Sistema de contato integrado
- **Validação**: Validação de email e campos obrigatórios
- **Notificações**: Envio de emails automáticos

### 💬 Integração WhatsApp
- **Botão Flutuante**: Acesso direto ao WhatsApp
- **Contato Rápido**: Facilita comunicação com clientes

## Tecnologias e Integrações

### Backend
- **Spring Boot**: Framework principal
- **Spring Security**: Autenticação e autorização
- **Spring Data JPA**: Persistência de dados
- **Spring Mail**: Envio de emails
- **AWS SDK**: Integração com Amazon S3
- **JWT**: Tokens de autenticação
- **ModelMapper**: Conversão de objetos
- **Lombok**: Redução de código boilerplate
- **Flyway**: Migrações de banco de dados

### Frontend
- **Next.js**: Framework React com SSR/SSG
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **Radix UI**: Componentes acessíveis
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de schemas
- **SWR**: Data fetching e cache
- **Leaflet**: Mapas interativos
- **React Toastify**: Notificações
- **Lucide React**: Ícones

### Banco de Dados
- **PostgreSQL**: Banco relacional principal
- **Entidades Principais**:
  - `user`: Usuários do sistema
  - `property`: Propriedades/empreendimentos
  - `building`: Edifícios (herda de property)
  - `apartment`: Apartamentos
  - `post`: Posts do blog
  - `property_document`: Documentos das propriedades
  - `get_in_touch`: Mensagens de contato

## Características Técnicas

### Performance
- **Cache**: Implementação de cache em múltiplas camadas
- **Paginação**: Sistema eficiente de paginação
- **Otimização de Imagens**: Compressão e otimização automática
- **Lazy Loading**: Carregamento sob demanda

### Segurança
- **JWT**: Autenticação stateless
- **Validação**: Validação rigorosa de dados
- **CORS**: Configuração adequada de CORS
- **Upload Seguro**: Validação de tipos de arquivo

### Escalabilidade
- **Arquitetura Modular**: Separação clara de responsabilidades
- **Containerização**: Deploy facilitado com Docker
- **Microserviços**: Estrutura preparada para expansão

## Deploy e Infraestrutura

### Desenvolvimento
- **Docker Compose**: Ambiente local completo
- **Hot Reload**: Desenvolvimento ágil com recarga automática
- **Banco Local**: PostgreSQL em container

### Produção
- **Containers**: Aplicação containerizada
- **Banco Externo**: PostgreSQL em servidor dedicado
- **AWS S3**: Armazenamento de arquivos na nuvem
- **SMTP**: Configuração de email para produção

## Público-Alvo

O sistema atende a diferentes perfis de usuários:

1. **Visitantes**: Navegação no site institucional, visualização de empreendimentos
2. **Clientes Potenciais**: Formulário de contato, informações detalhadas dos projetos
3. **Usuários Registrados**: Acesso a conteúdo exclusivo, perfil personalizado
4. **Administradores**: Gestão completa do sistema, CRUD de todas as entidades

## Diferenciais

- **Design Moderno**: Interface contemporânea com gradientes e animações
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **Performance**: Otimizado para carregamento rápido
- **Acessibilidade**: Componentes Radix UI seguem padrões de acessibilidade
- **SEO Friendly**: Next.js com SSR para melhor indexação
- **Integração Completa**: WhatsApp, email, mapas e armazenamento em nuvem

## Como Executar o Projeto

### Pré-requisitos
- Docker e Docker Compose instalados
- Java 17+ (para desenvolvimento local)
- Node.js 18+ (para desenvolvimento local)

### Execução com Docker
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd greenhome

# Execute com Docker Compose
docker-compose up -d
```

### Desenvolvimento Local
```bash
# Backend (API)
cd api
./mvnw spring-boot:run

# Frontend
cd front
npm install
npm run dev
```

## Estrutura do Projeto

```
greenhome/
├── api/                    # Backend Spring Boot
│   ├── src/main/java/     # Código fonte Java
│   ├── src/main/resources/ # Configurações e recursos
│   └── Dockerfile         # Container do backend
├── front/                 # Frontend Next.js
│   ├── src/app/          # Páginas e rotas
│   ├── src/components/   # Componentes React
│   └── package.json     # Dependências Node.js
├── docker-compose.yml    # Orquestração dos containers
└── README.md            # Este arquivo
```

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é propriedade da GreenHome Construtora e Incorporadora LTDA.

---

**GreenHome** - Construindo sonhos e transformando realidades desde 2019. 
