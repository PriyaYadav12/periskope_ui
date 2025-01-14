CREATE TABLE groups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_name VARCHAR(255) NOT NULL,
    project VARCHAR(255) NOT NULL,
    labels TEXT[] DEFAULT ARRAY[]::TEXT[],
    members JSONB NOT NULL,
    last_inactive TIMESTAMP,
    message_count INTEGER DEFAULT 0
);
