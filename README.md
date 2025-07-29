# MOD20 Types

Shared TypeScript type definitions for the MOD20 tabletop RPG system.

## Overview

This package contains TypeScript interfaces and types that are shared across the MOD20 ecosystem, including the API backend and React frontend applications.

## Core Types

- **SystemType** - Game system definitions with abilities, characters, and metadata
- **RaceType** - Character race definitions with traits, bonuses, and speed modifiers  
- **RoleType** - Character class/role definitions with abilities and progression
- **ImageType** - Media library image metadata with system-scoped filtering
- **AbilityType** - Core ability scores and modifiers
- **SystemCharacterType** - Character data structures for system management

## Features

- System-scoped data organization
- Timestamp tracking for created/updated records
- Media library integration with proper type safety
- Comprehensive character creation and management types

## Usage

```typescript
import { SystemType, RaceType, RoleType } from '@mod20/types';
```

## License

MIT License
