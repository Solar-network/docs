---
title: Services - Filesystem
---

# Filesystem

Core ships with a filesystem abstraction that makes it easy to switch from a local filesystem to a remote one. The default driver that is shipped provides access to the local filesystem but using your own filesystem driver is just as easy.

## Prerequisites

Before we start, we need to establish what a few recurring variables and imports in this document refer to when they are used.

```typescript
import { app, Container, Services } from "@arkecosystem/core-kernel";
```

* The `app` import refers to the application instance which grants access to the container, configurations, system information and more.
* The `Container` import refers to a namespace that contains all of the container specific entities like binding symbols and interfaces.
* The `Services` import refers to a namespace that contains all of the core services. This generally will only be needed for type hints as Core is responsible for service creation and maintenance.

## Filesystem Usage

### Determine if a file exists

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .exists("/home/solar/stats.txt");
```

### Get the contents of a file

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .get("/home/solar/stats.txt");
```

### Write the contents of a file

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .put("/home/solar/stats.txt", "Hello World");
```

### Delete the file at a given path

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .delete("/home/solar/stats.txt");
```

### Copy a file to a new location

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .copy("/home/solar/old.txt", "/home/solar/new.txt");
```

### Move a file to a new location

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .move("/home/solar/old.txt", "/home/solar/new.txt");
```

### Get the file size of a given file

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .size("/home/solar/stats.txt");
```

### Get the file's last modification time

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .lastModified("/home/solar/stats.txt");
```

### Get an array of all files in a directory

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .files("/home/solar");
```

### Get all of the directories within a given directory

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .directories("/home/solar");
```

### Create a directory

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .makeDirectory("/home/solar");
```

### Recursively delete a directory

```typescript
app
    .get<Services.Filesystem.FilesystemService>(Container.Identifiers.FilesystemService)
    .deleteDirectory("/home/solar");
```

## Extending

@TODO
