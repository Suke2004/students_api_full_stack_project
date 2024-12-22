package types

type Student struct {
	Id    int64
	Name  string `json: "name" validate:"required"`
	Email string `json: "email" validate:"required"`
	Age   int    `json: "age"validate:"required"`
	Subjects
}

type Subjects struct {
	Code  string `json: "code" validate:"required"`
	Name  string `json: "name" validate:"required"`
	Prof  string `json: "prof" validate:"required"`
	Marks int    `json:"marks"`
}

// type Config struct {
// 	Port        string
// 	StoragePath string // If you still want SQLite for fallback or dual support
// 	MongoDB     struct {
// 		URI      string
// 		Database string
// 	}
// }
// type Config struct {
// 	Postgres struct {
// 		Host     string
// 		Port     string
// 		User     string
// 		Password string
// 		DbName   string
// 		SSLMode  string
// 	}
// }
