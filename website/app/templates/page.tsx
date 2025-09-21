"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
  Star,
  Eye,
  Code,
  Calendar,
  Zap,
  CheckCircle,
  Users,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import Container from "@/components/global/animation-container";
import { TEMPLATES } from "@/utils";

const ITEMS_PER_PAGE = 9;

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(TEMPLATES.map((template) => template.category))
    );
    return uniqueCategories;
  }, []);

  // Filter and search templates
  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((template) => {
      const matchesSearch = template.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        template.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        template.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || template.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTemplates = filteredTemplates.slice(startIndex, endIndex);

  // Reset page when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
    setIsCategoryDropdownOpen(false);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const getCategoryDisplayName = (category: string) => {
    return category === "all" ? "Todas as categorias" : category;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    if (isCategoryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoryDropdownOpen]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;

    // Calculate start and end page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(1)}
          className="h-8 w-8 p-0"
        >
          1
        </Button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-2 text-muted-foreground">
            ...
          </span>
        );
      }
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(i)}
          className="h-8 w-8 p-0"
        >
          {i}
        </Button>
      );
    }

    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-2 text-muted-foreground">
            ...
          </span>
        );
      }
      pages.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(totalPages)}
          className="h-8 w-8 p-0"
        >
          {totalPages}
        </Button>
      );
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {pages}
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted/2 rounded-full blur-3xl" />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <Container>
          {/* Header Section */}
          <div className="py-8 lg:py-12">
            <div className="text-center mb-12">
              <Container delay={0.1}>
                <div className="mb-6">
                  <Badge
                    variant="secondary"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full"
                  >
                    <Sparkles className="h-4 w-4" />
                    Coleção Completa
                  </Badge>
                </div>
              </Container>

              <Container delay={0.2}>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Todos os <em className="italic">Templates</em>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore nossa coleção completa de templates profissionais.
                  Encontre o perfeito para seu próximo projeto.
                </p>
              </Container>
            </div>

            {/* Search and Filters */}
            <Container delay={0.3}>
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar templates..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 h-12 w-full"
                  />
                </div>

                {/* Category Filter */}
                <div ref={dropdownRef} className="relative w-full lg:w-48">
                  <Button
                    variant="outline"
                    onClick={toggleCategoryDropdown}
                    className="w-full h-12 justify-between px-3"
                  >
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      <span className="truncate">
                        {getCategoryDisplayName(selectedCategory)}
                      </span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      isCategoryDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </Button>

                  {/* Dropdown Menu */}
                  {isCategoryDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                      <div className="p-1">
                        <Button
                          variant={selectedCategory === "all" ? "default" : "ghost"}
                          onClick={() => handleCategoryChange("all")}
                          className="w-full justify-start h-10 px-3"
                        >
                          Todas as categorias
                        </Button>
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "ghost"}
                            onClick={() => handleCategoryChange(category)}
                            className="w-full justify-start h-10 px-3"
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="flex border rounded-lg p-1 bg-muted/50 h-12 items-center">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-10 px-3 flex-1"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-10 px-3 flex-1"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Container>

            {/* Results Info */}
            <Container delay={0.4}>
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  Mostrando {startIndex + 1}-{Math.min(endIndex, filteredTemplates.length)} de{" "}
                  {filteredTemplates.length} templates
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Página {currentPage} de {totalPages}</span>
                </div>
              </div>
            </Container>

            {/* Templates Grid/List */}
            <Container delay={0.5}>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {currentTemplates.map((template) => (
                    <Card
                      key={template.id}
                      className="group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/20 shadow-sm bg-card/40 backdrop-blur-sm overflow-hidden p-0"
                    >
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] relative w-full">
                          <Image
                            src={template.image || "/placeholder.svg"}
                            alt={template.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            width={500}
                            height={500}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                className="backdrop-blur-md bg-white/20 border-white/30 text-white hover:bg-white/30"
                                asChild
                              >
                                <Link href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <Eye className="w-4 h-4 mr-1" />
                                  Demo
                                </Link>
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                                asChild
                              >
                                <Link href={template.codeUrl} target="_blank" rel="noopener noreferrer">
                                  <Code className="w-4 h-4 mr-1" />
                                  Código
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white border-0 text-xs">
                            {template.category}
                          </Badge>
                          {template.featured && (
                            <Badge className="absolute top-3 right-3 bg-yellow-500/90 backdrop-blur-sm text-white border-0 text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Destaque
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-5">
                        <div className="space-y-3">
                          <div>
                            <Link
                              href={`/template/${template.id}`}
                              className="group-hover:text-primary transition-colors duration-300"
                            >
                              <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                                {template.name}
                              </h3>
                            </Link>
                            <p className="text-muted-foreground text-sm line-clamp-2">
                              {template.description}
                            </p>
                          </div>

                          {/* Template Stats */}
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <span>{template.lastUpdated}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Zap className="w-3 h-3" />
                              <span>{template.difficulty}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <CheckCircle className="w-3 h-3" />
                              <span>{template.price}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span>{template.tags.length} techs</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {template.tags.slice(0, 2).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-border/30 bg-muted/20 px-2 py-0.5"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {template.tags.length > 2 && (
                              <Badge
                                variant="outline"
                                className="text-xs border-border/30 bg-muted/20 px-2 py-0.5"
                              >
                                +{template.tags.length - 2}
                              </Badge>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="pt-2">
                            <Link href={`/template/${template.id}`}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full text-primary hover:text-primary/80 hover:bg-primary/5 text-sm h-8"
                              >
                                Ver Detalhes
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 mb-8">
                  {currentTemplates.map((template) => (
                    <Card
                      key={template.id}
                      className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-border/10 shadow-sm bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/20 hover:-translate-y-1 rounded-xl"
                    >
                      <div className="flex flex-col lg:flex-row overflow-hidden rounded-xl">
                        {/* Image Section */}
                        <div className="relative w-full lg:w-80 h-64 lg:h-48 flex-shrink-0 overflow-hidden">
                          <div className="relative w-full h-full group/image">
                            <Image
                              src={template.image || "/placeholder.svg"}
                              alt={template.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              sizes="(max-width: 1024px) 100vw, 320px"
                            />
                            
                            {/* Subtle Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Action Buttons Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                              <div className="flex gap-3">
                                <Button
                                  size="sm"
                                  className="backdrop-blur-lg bg-white/95 border-white/40 text-foreground hover:bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 font-medium"
                                  asChild
                                >
                                  <Link href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Demo
                                  </Link>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="backdrop-blur-lg bg-white/25 border-white/50 text-white hover:bg-white/35 hover:border-white/60 transition-all duration-300 hover:scale-110 font-medium"
                                  asChild
                                >
                                  <Link href={template.codeUrl} target="_blank" rel="noopener noreferrer">
                                    <Code className="w-4 h-4 mr-2" />
                                    Código
                                  </Link>
                                </Button>
                              </div>
                            </div>
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-primary/95 backdrop-blur-md text-white border-0 text-xs font-semibold px-3 py-1.5 shadow-xl">
                                {template.category}
                              </Badge>
                            </div>
                            
                            {/* Featured Badge */}
                            {template.featured && (
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-xs font-semibold px-3 py-1.5 shadow-xl">
                                  <Star className="w-3 h-3 mr-1.5" />
                                  Destaque
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-8">
                          <div className="space-y-6">
                            {/* Header */}
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <Link
                                    href={`/template/${template.id}`}
                                    className="group-hover:text-primary transition-colors duration-300"
                                  >
                                    <h3 className="font-bold text-2xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                                      {template.name}
                                    </h3>
                                  </Link>
                                  <p className="text-muted-foreground text-base leading-relaxed">
                                    {template.description}
                                  </p>
                                </div>
                                
                                {/* Action Button */}
                                <div className="ml-6 flex-shrink-0">
                                  <Link href={`/template/${template.id}`}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="text-primary hover:text-primary/80 hover:bg-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 group/btn"
                                    >
                                      Ver Detalhes
                                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                              <div className="flex items-center gap-3 text-sm">
                                <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                  <Calendar className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground font-medium">Atualizado</p>
                                  <p className="text-sm font-semibold text-foreground">{template.lastUpdated}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3 text-sm">
                                <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                  <Zap className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground font-medium">Dificuldade</p>
                                  <p className="text-sm font-semibold text-foreground">{template.difficulty}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3 text-sm">
                                <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                  <CheckCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground font-medium">Preço</p>
                                  <p className="text-sm font-semibold text-foreground">{template.price}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3 text-sm">
                                <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                  <Users className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground font-medium">Tecnologias</p>
                                  <p className="text-sm font-semibold text-foreground">{template.tags.length}</p>
                                </div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {template.tags.slice(0, 6).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs border-border/40 bg-muted/30 hover:bg-primary/10 hover:border-primary/30 px-3 py-1.5 font-medium transition-all duration-300 group-hover:scale-105"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {template.tags.length > 6 && (
                                <Badge
                                  variant="outline"
                                  className="text-xs border-border/40 bg-muted/30 hover:bg-primary/10 hover:border-primary/30 px-3 py-1.5 font-medium transition-all duration-300"
                                >
                                  +{template.tags.length - 6}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </Container>

            {/* Pagination */}
            {renderPagination()}
          </div>
        </Container>
      </MaxWidthWrapper>
    </main>
  );
}
