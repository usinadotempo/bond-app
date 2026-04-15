-- Tabela de perfis (Pai/Filho)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    role TEXT CHECK (role IN ('parent', 'child')),
    full_name TEXT,
    avatar_url TEXT
);

-- Tabela de acordos (A "Mesa de Acordos")
CREATE TABLE agreements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    parent_id UUID REFERENCES profiles(id),
    child_id UUID REFERENCES profiles(id),
    title TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de recompensas
CREATE TABLE rewards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agreement_id UUID REFERENCES agreements(id),
    title TEXT NOT NULL,
    cost_in_coins INTEGER NOT NULL
);
