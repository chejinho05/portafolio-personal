const GITHUB_API = "https://api.github.com";
const GITHUB_API_VERSION = "2026-03-10";
const CACHE_SECONDS = 60 * 30;
const EXCLUDED_OWNER = "gq ideas";
const EXCLUDED_OWNER_KEY = normalizeOwner(EXCLUDED_OWNER);

const CURATED_REPOS = [
  "kinalitos/parade-weather",
  "bcastillo-2022474/GuateVigila",
  "asanabria-2021067/waterway-backend",
  "carlosaltan18/earth_way_front",
  "carlosaltan18/Proyecto1-bitcoin-script",
  "carlosaltan18/earth-way",
  "bcastillo-2022474/waste-classifier-api",
];

const DENYLIST_REPOS = [
  "asanabria-2021067/backend-blog",
];

interface ProjectOverride {
  displayName: string;
  badgeEn?: string;
  badgeEs?: string;
  badgeColor?: "gold" | "violet" | "blue" | "green";
  productionUrl?: string;
  categoryEn: string;
  categoryEs: string;
  descriptionEn: string;
  descriptionEs: string;
  bulletsEn: string[];
  bulletsEs: string[];
  roleEn?: string;
  roleEs?: string;
  tags?: string[];
  private?: boolean;
  frontendRepoLink?: string;
}

const PROJECT_OVERRIDES: Record<string, ProjectOverride> = {
  "carlosaltan18/earth_way_front": {
    displayName: "EarthWay Frontend",
    badgeEn: "Next.js + Maps",
    badgeEs: "Next.js + mapas",
    badgeColor: "green",
    productionUrl: "https://earth-way.vercel.app",
    categoryEn: "Environmental community platform",
    categoryEs: "Plataforma comunitaria ambiental",
    descriptionEn:
      "Frontend for EarthWay, a web platform for managing users, organizations, events, reports, certificates, and environmental publications with geolocation features.",
    descriptionEs:
      "Frontend de EarthWay, una plataforma web para gestionar usuarios, organizaciones, eventos, reportes, certificados y publicaciones ambientales con funciones de geolocalizacion.",
    bulletsEn: [
      "Built with Next.js, React, TypeScript, and Tailwind CSS",
      "Consumes a Spring Boot backend with PostgreSQL and PostGIS",
      "Uses React Query, Axios, and ShadCN UI for a responsive interface",
    ],
    bulletsEs: [
      "Construido con Next.js, React, TypeScript y Tailwind CSS",
      "Consume un backend Spring Boot con PostgreSQL y PostGIS",
      "Usa React Query, Axios y ShadCN UI para una interfaz responsiva",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query"],
  },
  "carlosaltan18/Proyecto1-bitcoin-script": {
    displayName: "Bitcoin Script Interpreter",
    badgeEn: "Java 21",
    badgeEs: "Java 21",
    badgeColor: "gold",
    categoryEn: "Data structures interpreter",
    categoryEs: "Interprete de estructuras de datos",
    descriptionEn:
      "Didactic interpreter for a subset of Bitcoin Script, executing stack-based scripts from left to right and validating truthy final stack states.",
    descriptionEs:
      "Interprete didactico para un subconjunto de Bitcoin Script, ejecutando scripts basados en pila de izquierda a derecha y validando estados finales verdaderos.",
    bulletsEn: [
      "Implements a byte-array stack execution model",
      "Supports script files and step-by-step trace output",
      "Includes Maven Wrapper for reproducible Java execution",
    ],
    bulletsEs: [
      "Implementa un modelo de ejecucion con pila de arreglos de bytes",
      "Soporta archivos de scripts y trazas paso a paso",
      "Incluye Maven Wrapper para ejecucion reproducible en Java",
    ],
    tags: ["Java", "Bitcoin Script", "Stack", "Interpreter", "Maven"],
  },
  "carlosaltan18/earth-way": {
    displayName: "EarthWay Backend",
    badgeEn: "Spring + PostGIS",
    badgeEs: "Spring + PostGIS",
    badgeColor: "blue",
    categoryEn: "Geospatial environmental API",
    categoryEs: "API ambiental geoespacial",
    descriptionEn:
      "Spring Boot backend for EarthWay with user authentication, roles, organizations, events, publications, reports, certificates, and geolocation support.",
    descriptionEs:
      "Backend Spring Boot para EarthWay con autenticacion de usuarios, roles, organizaciones, eventos, publicaciones, reportes, certificados y soporte de geolocalizacion.",
    bulletsEn: [
      "JWT authentication with admin and user roles",
      "CRUD modules for users, organizations, events, and publications",
      "PostgreSQL/PostGIS, Hibernate, Cloudinary, and map integrations",
    ],
    bulletsEs: [
      "Autenticacion JWT con roles de administrador y usuario",
      "Modulos CRUD para usuarios, organizaciones, eventos y publicaciones",
      "PostgreSQL/PostGIS, Hibernate, Cloudinary e integraciones de mapas",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "PostGIS", "JWT"],
    frontendRepoLink: "https://github.com/carlosaltan18/earth_way_front",
  },
  "kinalitos/parade-weather": {
    displayName: "Weather Way",
    badgeEn: "NASA Space Apps",
    badgeEs: "NASA Space Apps",
    badgeColor: "violet",
    productionUrl: "https://weather-way-gt.netlify.app",
    categoryEn: "Climate justice analytics platform",
    categoryEs: "Plataforma de analisis climatico",
    descriptionEn:
      "NASA-powered climate analysis platform focused on vulnerable communities, agricultural impact, satellite layers, and professional report generation.",
    descriptionEs:
      "Plataforma de analisis climatico con datos de NASA enfocada en comunidades vulnerables, impacto agricola, capas satelitales y generacion de reportes profesionales.",
    bulletsEn: [
      "Climate justice dashboard for vulnerable community analysis",
      "Agricultural impact and food security risk assessment",
      "Integrates NASA satellite data layers and PDF reporting",
    ],
    bulletsEs: [
      "Dashboard de justicia climatica para analizar comunidades vulnerables",
      "Evaluacion de impacto agricola y riesgo de seguridad alimentaria",
      "Integra capas satelitales de NASA y reportes PDF",
    ],
    tags: ["TypeScript", "NASA", "Climate", "Maps", "PDF Reports"],
  },
  "bcastillo-2022474/GuateVigila": {
    displayName: "GuateVigila",
    badgeEn: "Civic Tech",
    badgeEs: "Civic Tech",
    badgeColor: "gold",
    productionUrl: "https://guatevigila.netlify.app",
    categoryEn: "Public procurement risk detection",
    categoryEs: "Deteccion de riesgo en compras publicas",
    descriptionEn:
      "Civic technology tool that analyzes Guatecompras OCDS data from 2020 to 2024 and generates alerts for statistically anomalous entity-supplier behavior.",
    descriptionEs:
      "Herramienta civica que analiza datos OCDS de Guatecompras de 2020 a 2024 y genera alertas sobre comportamientos estadisticamente anomalos entre entidades y proveedores.",
    bulletsEn: [
      "Detects five procurement risk signals in Guatemalan public contracts",
      "Uses DuckDB over OCDS CSV files with direct SQL queries",
      "Built with Next.js, TypeScript, Tailwind CSS, Vercel, and AI-assisted context drafts",
    ],
    bulletsEs: [
      "Detecta cinco senales de riesgo en contrataciones publicas guatemaltecas",
      "Usa DuckDB sobre archivos CSV OCDS con consultas SQL directas",
      "Construido con Next.js, TypeScript, Tailwind CSS, Vercel e IA para borradores de contexto",
    ],
    tags: ["Next.js", "TypeScript", "DuckDB", "Open Data", "Civic Tech"],
  },
  "bcastillo-2022474/waste-classifier-api": {
    displayName: "Trashify API",
    badgeEn: "Django API",
    badgeEs: "API Django",
    badgeColor: "green",
    categoryEn: "Waste classification backend",
    categoryEs: "Backend de clasificacion de residuos",
    descriptionEn:
      "Backend service for uploading, classifying, categorizing, and tracking waste items from images using Django REST Framework and a hexagonal architecture.",
    descriptionEs:
      "Servicio backend para subir, clasificar, categorizar y registrar residuos a partir de imagenes usando Django REST Framework y arquitectura hexagonal.",
    bulletsEn: [
      "Image-based waste item classification workflow",
      "Django, DRF, PostgreSQL, MinIO, Docker, and Poetry setup",
      "Stores editable waste records for statistics and tracking",
    ],
    bulletsEs: [
      "Flujo de clasificacion de residuos basado en imagenes",
      "Configuracion con Django, DRF, PostgreSQL, MinIO, Docker y Poetry",
      "Guarda registros editables para estadisticas y seguimiento",
    ],
    tags: ["Python", "Django", "DRF", "PostgreSQL", "MinIO"],
  },
  "asanabria-2021067/waterway-backend": {
    displayName: "WaterWay+ Backend",
    badgeEn: "Hackathon Winner",
    badgeEs: "Ganador de hackathon",
    badgeColor: "gold",
    productionUrl: "https://water-way.netlify.app/",
    categoryEn: "Environmental reporting API",
    categoryEs: "API de reportes ambientales",
    descriptionEn:
      "Backend API for WaterWay+, a platform for river protection, environmental incident reporting, and community cleanup coordination.",
    descriptionEs:
      "API backend para WaterWay+, una plataforma para proteccion de rios, reporte de incidentes ambientales y coordinacion de limpiezas comunitarias.",
    bulletsEn: [
      "Secure user and organization authentication with JWT",
      "Georeferenced pollution reports for map-based visualization",
      "Modules for river monitoring and community environmental events",
    ],
    bulletsEs: [
      "Autenticacion segura de usuarios y organizaciones con JWT",
      "Reportes de contaminacion georreferenciados para visualizacion en mapa",
      "Modulos para monitoreo de rios y eventos ambientales comunitarios",
    ],
    tags: ["JavaScript", "Node.js", "Express", "REST API", "JWT"],
    frontendRepoLink: "https://github.com/kinalitos/waterway-frontend",
  },
};

interface GithubUser {
  login: string;
}

interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  pushed_at: string | null;
  updated_at: string;
  archived: boolean;
  private: boolean;
  disabled?: boolean;
  owner: {
    login: string;
    type?: string;
  };
}

interface GithubOrganization {
  login: string;
  name: string | null;
}

interface GithubDeployment {
  id: number;
  payload?: unknown;
}

interface GithubDeploymentStatus {
  state: string;
  environment_url?: string | null;
  target_url?: string | null;
}

export interface PortfolioProject {
  id: number;
  name: string;
  displayName: string;
  fullName: string;
  badgeEn?: string;
  badgeEs?: string;
  badgeColor?: "gold" | "violet" | "blue" | "green";
  owner?: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  categoryEn: string;
  categoryEs: string;
  bulletsEn: string[];
  bulletsEs: string[];
  roleEn?: string;
  roleEs?: string;
  repoUrl?: string;
  frontendRepoLink?: string;
  productionUrl?: string;
  private: boolean;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  pushedAt: string | null;
  updatedAt: string;
  commitCount: number;
}

export interface GithubProjectsPayload {
  status: "ok" | "missing-token";
  generatedAt: string;
  username?: string;
  totalRepos: number;
  totalAfterFilter: number;
  excludedOwner: string;
  projects: PortfolioProject[];
  message?: string;
}

class GithubApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly path: string
  ) {
    super(message);
    this.name = "GithubApiError";
  }
}

function getToken() {
  return process.env.GITHUB_TOKEN?.trim() || process.env.GITHUB_PAT?.trim();
}

function normalizeOwner(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function isExcludedOwner(owner: string) {
  return normalizeOwner(owner) === EXCLUDED_OWNER_KEY;
}

function ownerKey(owner: string) {
  return owner.toLowerCase();
}

function repoKey(fullName: string) {
  return fullName.toLowerCase();
}

function headers(token: string) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
  };
}

async function githubResponse(path: string, token: string) {
  return fetch(`${GITHUB_API}${path}`, {
    headers: headers(token),
    next: { revalidate: CACHE_SECONDS },
  });
}

async function githubJson<T>(path: string, token: string) {
  const response = await githubResponse(path, token);

  if (!response.ok) {
    throw new GithubApiError(`GitHub request failed with ${response.status}`, response.status, path);
  }

  return {
    data: (await response.json()) as T,
    headers: response.headers,
  };
}

function getLastPage(linkHeader: string | null) {
  if (!linkHeader) return null;
  const last = linkHeader.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/);
  return last ? Number(last[1]) : null;
}

async function fetchAllPages<T>(path: string, token: string) {
  const items: T[] = [];
  let page = 1;

  while (true) {
    const separator = path.includes("?") ? "&" : "?";
    const { data, headers: responseHeaders } = await githubJson<T[]>(
      `${path}${separator}page=${page}`,
      token
    );

    items.push(...data);

    const lastPage = getLastPage(responseHeaders.get("link"));
    if (lastPage ? page >= lastPage : data.length < 100) {
      break;
    }

    page += 1;
  }

  return items;
}

function getCommitCountFromLink(linkHeader: string | null, currentPageLength: number) {
  const lastPage = getLastPage(linkHeader);
  if (lastPage) return lastPage;
  return currentPageLength;
}

async function getCommitCount(repo: GithubRepo, username: string, token: string) {
  const owner = encodeURIComponent(repo.owner.login);
  const repoName = encodeURIComponent(repo.name);
  const author = encodeURIComponent(username);
  const response = await githubResponse(
    `/repos/${owner}/${repoName}/commits?author=${author}&per_page=1`,
    token
  );

  if (response.status === 409 || response.status === 404) return 0;
  if (!response.ok) return 0;

  const commits = (await response.json()) as unknown[];
  return getCommitCountFromLink(response.headers.get("link"), commits.length);
}

function normalizeUrl(value?: string | null) {
  if (!value) return undefined;
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(candidate);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function getPayloadUrl(payload: unknown) {
  if (!payload || typeof payload !== "object") return undefined;
  const value = (payload as { web_url?: unknown; url?: unknown }).web_url ?? (payload as { url?: unknown }).url;
  return typeof value === "string" ? normalizeUrl(value) : undefined;
}

async function getProductionUrl(repo: GithubRepo, token: string) {
  const homepage = normalizeUrl(repo.homepage);
  if (homepage) return homepage;

  const owner = encodeURIComponent(repo.owner.login);
  const repoName = encodeURIComponent(repo.name);
  const deploymentsPath = `/repos/${owner}/${repoName}/deployments?environment=production&per_page=5`;
  const deploymentsResponse = await githubResponse(deploymentsPath, token);

  if (!deploymentsResponse.ok) return undefined;

  const deployments = (await deploymentsResponse.json()) as GithubDeployment[];

  for (const deployment of deployments) {
    const statusesPath = `/repos/${owner}/${repoName}/deployments/${deployment.id}/statuses?per_page=5`;
    const statusesResponse = await githubResponse(statusesPath, token);

    if (!statusesResponse.ok) continue;

    const statuses = (await statusesResponse.json()) as GithubDeploymentStatus[];
    const successfulStatus = statuses.find((status) => status.state === "success");
    const statusUrl =
      normalizeUrl(successfulStatus?.environment_url) ?? normalizeUrl(successfulStatus?.target_url);

    if (statusUrl) return statusUrl;

    const payloadUrl = getPayloadUrl(deployment.payload);
    if (payloadUrl) return payloadUrl;
  }

  return undefined;
}

async function getExcludedOwnerLogins(repos: GithubRepo[], token: string) {
  const organizationOwners = Array.from(
    new Set(
      repos
        .filter((repo) => repo.owner.type === "Organization" || isExcludedOwner(repo.owner.login))
        .map((repo) => repo.owner.login)
    )
  );

  const matches = await mapLimit(organizationOwners, 4, async (login) => {
    if (isExcludedOwner(login)) return ownerKey(login);

    const response = await githubResponse(`/orgs/${encodeURIComponent(login)}`, token);
    if (!response.ok) return undefined;

    const organization = (await response.json()) as GithubOrganization;
    return isExcludedOwner(organization.login) || isExcludedOwner(organization.name ?? "")
      ? ownerKey(login)
      : undefined;
  });

  return new Set(matches.filter((login): login is string => Boolean(login)));
}

async function getRepo(fullName: string, token: string) {
  const response = await githubResponse(`/repos/${fullName}`, token);
  if (!response.ok) return undefined;
  return (await response.json()) as GithubRepo;
}

async function getCuratedRepos(repos: GithubRepo[], token: string) {
  const repoMap = new Map(repos.map((repo) => [repoKey(repo.full_name), repo]));
  const missing = CURATED_REPOS.filter((fullName) => !repoMap.has(repoKey(fullName)));
  const fetchedRepos = await mapLimit(missing, 4, (fullName) => getRepo(fullName, token));

  fetchedRepos.forEach((repo) => {
    if (repo) repoMap.set(repoKey(repo.full_name), repo);
  });

  return CURATED_REPOS.map((fullName) => repoMap.get(repoKey(fullName))).filter(
    (repo): repo is GithubRepo => Boolean(repo)
  );
}

async function mapLimit<T, U>(
  items: T[],
  limit: number,
  mapper: (item: T) => Promise<U>
) {
  const results: U[] = [];

  for (let index = 0; index < items.length; index += limit) {
    const batch = items.slice(index, index + limit);
    results.push(...(await Promise.all(batch.map(mapper))));
  }

  return results;
}

function toProject(repo: GithubRepo, commitCount: number, productionUrl?: string): PortfolioProject {
  const override = PROJECT_OVERRIDES[repo.full_name];
  const resolvedProductionUrl = override?.productionUrl ?? productionUrl;
  const isPrivate = override?.private !== undefined ? override.private : repo.private;
  const fallbackDescription = repo.description || "Repository pulled from GitHub activity.";
  const fallbackBullets = [
    isPrivate ? "Private repository" : "Public repository",
    `Last push: ${repo.pushed_at ?? repo.updated_at}`,
  ];

  return {
    id: repo.id,
    name: repo.name,
    displayName: override?.displayName ?? repo.name,
    fullName: repo.full_name,
    badgeEn: override?.badgeEn,
    badgeEs: override?.badgeEs,
    badgeColor: override?.badgeColor,
    description: override?.descriptionEn ?? fallbackDescription,
    descriptionEn: override?.descriptionEn ?? fallbackDescription,
    descriptionEs: override?.descriptionEs ?? fallbackDescription,
    categoryEn: override?.categoryEn ?? (repo.language ? `${repo.language} repository` : "Repository"),
    categoryEs: override?.categoryEs ?? (repo.language ? `Repositorio ${repo.language}` : "Repositorio"),
    bulletsEn: override?.bulletsEn ?? fallbackBullets,
    bulletsEs: override?.bulletsEs ?? fallbackBullets,
    roleEn: override?.roleEn,
    roleEs: override?.roleEs,
    repoUrl: isPrivate ? undefined : repo.html_url,
    frontendRepoLink: override?.frontendRepoLink,
    productionUrl: resolvedProductionUrl,
    private: isPrivate,
    language: repo.language,
    topics: Array.from(new Set([...(override?.tags ?? []), ...(repo.topics ?? [])])),
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    pushedAt: repo.pushed_at,
    updatedAt: repo.updated_at,
    commitCount,
  };
}

export async function getGithubPortfolioProjects(limit = 9): Promise<GithubProjectsPayload> {
  const token = getToken();
  const generatedAt = new Date().toISOString();

  if (!token) {
    return {
      status: "missing-token",
      generatedAt,
      totalRepos: 0,
      totalAfterFilter: 0,
      excludedOwner: EXCLUDED_OWNER,
      projects: [],
      message: "Missing GITHUB_TOKEN in .env.local.",
    };
  }

  const { data: user } = await githubJson<GithubUser>("/user", token);
  const username = process.env.GITHUB_USERNAME?.trim() || user.login;
  const repos = await fetchAllPages<GithubRepo>(
    "/user/repos?affiliation=owner,collaborator,organization_member&visibility=all&sort=updated&per_page=100",
    token
  );
  const curatedRepos = await getCuratedRepos(repos, token);
  const excludedOwnerLogins = await getExcludedOwnerLogins(repos, token);
  const denylist = new Set(DENYLIST_REPOS.map(repoKey));

  const eligibleRepos = curatedRepos.filter(
    (repo) =>
      !repo.archived &&
      !repo.disabled &&
      !denylist.has(repoKey(repo.full_name)) &&
      !excludedOwnerLogins.has(ownerKey(repo.owner.login))
  );

  const rankedRepos = await mapLimit(eligibleRepos, 6, async (repo) => ({
    repo,
    commitCount: await getCommitCount(repo, username, token),
  }));

  const priority = new Map(CURATED_REPOS.map((fullName, index) => [repoKey(fullName), index]));
  const selectedRepos = rankedRepos
    .sort((a, b) => (priority.get(repoKey(a.repo.full_name)) ?? 999) - (priority.get(repoKey(b.repo.full_name)) ?? 999))
    .slice(0, limit);

  const projects = await mapLimit(selectedRepos, 4, async ({ repo, commitCount }) => {
    const productionUrl = await getProductionUrl(repo, token);
    return toProject(repo, commitCount, productionUrl);
  });

  return {
    status: "ok",
    generatedAt,
    username,
    totalRepos: repos.length,
    totalAfterFilter: eligibleRepos.length,
    excludedOwner: EXCLUDED_OWNER,
    projects,
  };
}
