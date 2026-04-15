-- Criação do schema isolado para o Bond App
CREATE SCHEMA IF NOT EXISTS bond_app;

-- Tabela de perfis (Pai/Filho)
CREATE TABLE bond_app.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    role TEXT CHECK (role IN ('parent', 'child')),
    full_name TEXT,
    avatar_url TEXT
);

-- Tabela de acordos (A "Mesa de Acordos")
CREATE TABLE bond_app.agreements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    parent_id UUID REFERENCES bond_app.profiles(id),
    child_id UUID REFERENCES bond_app.profiles(id),
    title TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de recompensas
CREATE TABLE bond_app.rewards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agreement_id UUID REFERENCES bond_app.agreements(id),
    title TEXT NOT NULL,
    cost_in_coins INTEGER NOT NULL
);
